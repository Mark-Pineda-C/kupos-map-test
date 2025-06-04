const data = [
    {
        "type": "seat",
        "floor": "1",
        "nro": "21",
        "column": "0",
        "row": "0",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "22",
        "column": "1",
        "row": "0",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "23",
        "column": "3",
        "row": "0",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "24",
        "column": "0",
        "row": "1",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "25",
        "column": "1",
        "row": "1",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "26",
        "column": "3",
        "row": "1",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "27",
        "column": "0",
        "row": "2",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "28",
        "column": "1",
        "row": "2",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "29",
        "column": "3",
        "row": "2",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "30",
        "column": "0",
        "row": "3",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "31",
        "column": "1",
        "row": "3",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "1",
        "nro": "32",
        "column": "3",
        "row": "3",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "1",
        "column": "0",
        "row": "0",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "2",
        "column": "1",
        "row": "0",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "3",
        "column": "3",
        "row": "0",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "4",
        "column": "0",
        "row": "1",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "5",
        "column": "1",
        "row": "1",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "6",
        "column": "3",
        "row": "3",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "7",
        "column": "0",
        "row": "3",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "8",
        "column": "1",
        "row": "3",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "9",
        "column": "0",
        "row": "4",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "10",
        "column": "1",
        "row": "4",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "11",
        "column": "3",
        "row": "4",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "12",
        "column": "0",
        "row": "5",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "13",
        "column": "1",
        "row": "5",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "14",
        "column": "3",
        "row": "5",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "15",
        "column": "0",
        "row": "6",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "16",
        "column": "1",
        "row": "6",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "17",
        "column": "3",
        "row": "6",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "18",
        "column": "0",
        "row": "7",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "19",
        "column": "1",
        "row": "7",
        "status": "1"
    },
    {
        "type": "seat",
        "floor": "2",
        "nro": "20",
        "column": "3",
        "row": "7",
        "status": "1"
    },
    {
        "type": "SSHH",
        "floor": "2",
        "nro": "",
        "column": "3",
        "row": "2",
        "status": ""
    },
    {
        "type": "TV",
        "floor": "1",
        "nro": "",
        "column": "2",
        "row": "0",
        "status": ""
    },
    {
        "type": "TV",
        "floor": "2",
        "nro": "",
        "column": "2",
        "row": "0",
        "status": ""
    },
    {
        "type": "TV",
        "floor": "2",
        "nro": "",
        "column": "2",
        "row": "2",
        "status": ""
    },
    {
        "type": "TV",
        "floor": "2",
        "nro": "",
        "column": "2",
        "row": "5",
        "status": ""
    }
]

export function Transzela() {
    // Agrupar por piso
    const pisos: Record<string, any[]> = {};
    let maxCol: Record<string, number> = {};
    let maxRow: Record<string, number> = {};
    data.forEach(a => {
        const piso = a.floor;
        if (!pisos[piso]) pisos[piso] = [];
        pisos[piso].push(a);
        const col = parseInt(a.column, 10);
        const row = parseInt(a.row, 10);
        maxCol[piso] = Math.max(maxCol[piso] || 0, col);
        maxRow[piso] = Math.max(maxRow[piso] || 0, row);
    });

    const renderAsiento = (a: any) => {
        if (a.type === 'SSHH') return <span style={{background:'#1976d2',color:'#fff',padding:'2px 6px',borderRadius:4,display:'inline-block'}}>wc</span>;
        if (a.type === 'TV') return <span style={{background:'#222',color:'#fff',padding:'2px 6px',borderRadius:4,display:'inline-block'}}>tv</span>;
        if (a.type === 'seat') {
            const ocupado = a.status === '0';
            return (
                <span style={{
                    background: ocupado ? '#e53935' : '#43a047',
                    color: '#fff',
                    padding: '2px 6px',
                    borderRadius: 4,
                    display: 'inline-block',
                    minWidth: 24,
                    textAlign: 'center',
                    opacity: ocupado ? 0.6 : 1,
                    border: ocupado ? '2px solid #b71c1c' : '2px solid #1b5e20',
                }}>
                    {a.nro}
                </span>
            );
        }
        return null;
    };

    return (
        <div>
            <h2>Layout de bus TRANSZELA</h2>
            <div style={{ display: 'flex', gap: 32 }}>
                {Object.entries(pisos).map(([piso, asientosPiso]) => (
                    <div key={piso}>
                        <h3>Piso {piso}</h3>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: `repeat(${maxCol[piso] + 1}, 40px)`,
                            gridTemplateRows: `repeat(${maxRow[piso] + 1}, 40px)`,
                            gap: 6,
                            background: '#222',
                            padding: 12,
                            borderRadius: 8,
                            boxShadow: '0 2px 8px #0002',
                        }}>
                            {Array.from({ length: maxRow[piso] + 1 }).map((_, yIdx) =>
                                Array.from({ length: maxCol[piso] + 1 }).map((_, xIdx) => {
                                    const asiento = asientosPiso.find(a => parseInt(a.column, 10) === xIdx && parseInt(a.row, 10) === yIdx);
                                    return (
                                        <div key={xIdx + '-' + yIdx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 32 }}>
                                            {asiento ? renderAsiento(asiento) : null}
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{marginTop:16}}>
                <span style={{background:'#43a047',color:'#fff',padding:'2px 6px',borderRadius:4,marginRight:8}}>Libre</span>
                <span style={{background:'#e53935',color:'#fff',padding:'2px 6px',borderRadius:4,marginRight:8}}>Ocupado</span>
                <span style={{background:'#1976d2',color:'#fff',padding:'2px 6px',borderRadius:4,marginRight:8}}>wc: Baño</span>
                <span style={{background:'#222',color:'#fff',padding:'2px 6px',borderRadius:4,marginRight:8}}>tv: TV</span>
            </div>
        </div>
    );
}