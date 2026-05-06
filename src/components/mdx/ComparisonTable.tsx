interface ComparisonTableProps {
  headers: string
  rows: string
  caption?: string
}

export function ComparisonTable({ headers, rows, caption }: ComparisonTableProps) {
  const parsedHeaders: string[] = JSON.parse(headers)
  const parsedRows: string[][] = JSON.parse(rows)

  return (
    <div className="not-prose my-8 overflow-x-auto">
      {caption && (
        <p className="font-heading text-sm font-semibold text-paper-600 mb-3">{caption}</p>
      )}
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {parsedHeaders.map((header, i) => (
              <th
                key={i}
                className="bg-ink-950 text-white font-heading font-semibold text-left px-4 py-3 first:rounded-tl-lg last:rounded-tr-lg"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {parsedRows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-paper-50' : 'bg-white'}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="px-4 py-3 text-ink-700 font-body border-b border-paper-200 first:font-semibold first:text-ink-950"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
