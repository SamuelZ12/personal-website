import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { BIO, CONFIG } from '@/config'

// The share card: the top of the home page on the light theme's paper, set
// the way the page sets it. One size throughout, with weight and ink carrying
// the hierarchy: the name medium, a line's gap over the muted bio. No domain,
// since every link preview prints that beside the card already. Drawn from
// BIO, the same source the page renders, so a bio edit reaches the card
// without anyone re-exporting an image; prerendered once at build time like
// any static file.
export const alt = `${CONFIG.name}. ${CONFIG.descriptionRaw}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// The light theme's tokens from globals.css.
const PAPER = 'hsl(40, 15.8%, 96.3%)'
const INK = 'hsl(42, 57.3%, 14.7%)'
const MUTED = 'hsl(42, 16.6%, 37.5%)'

// The image renderer cannot read next/font's variable woff2, so the two
// weights in use are kept as static files.
const font = (file: string) =>
    readFile(join(process.cwd(), 'src/assets/fonts', file))

// The renderer lays out flex boxes, not inline text, so a sentence that mixes
// two colours has to be wrapped by hand: the bio is cut into words, each one a
// box that holds its differently coloured runs together (a linked word keeps
// the full stop that follows it), and the row wraps between words.
type Run = { text: string; linked: boolean }

const words = BIO.reduce<Run[][]>(
    (lines, part) => {
        const linked = typeof part !== 'string'
        const text = linked ? part.text : part
        text.split(' ').forEach((piece, i) => {
            if (i > 0) lines.push([])
            if (piece) lines[lines.length - 1].push({ text: piece, linked })
        })
        return lines
    },
    [[]]
).filter((word) => word.length > 0)

export default async function Image() {
    const [regular, medium] = await Promise.all([
        font('inter-latin-400-normal.woff'),
        font('inter-latin-500-normal.woff'),
    ])

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '0 104px',
                    background: PAPER,
                    color: MUTED,
                    fontFamily: 'Inter',
                    fontSize: 44,
                }}
            >
                <div
                    style={{
                        fontWeight: 500,
                        lineHeight: 1.5,
                        color: INK,
                    }}
                >
                    {CONFIG.name}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        columnGap: '0.28em',
                        marginTop: 44,
                        lineHeight: 1.65,
                    }}
                >
                    {words.map((word, i) => (
                        <div key={i} style={{ display: 'flex' }}>
                            {word.map((run, j) => (
                                <span
                                    key={j}
                                    style={{ color: run.linked ? INK : MUTED }}
                                >
                                    {run.text}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        ),
        {
            ...size,
            fonts: [
                { name: 'Inter', data: regular, weight: 400, style: 'normal' },
                { name: 'Inter', data: medium, weight: 500, style: 'normal' },
            ],
        }
    )
}
