import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Jelaf } from './components/jelaf'
import { PalmaWari } from './components/palmawari'
import { Perubus } from './components/perubus'
import { Quatrobus } from './components/quatrobus'
import { Kronos } from './components/kronos'
import { Oltursa } from './components/oltursa'
import { Transmar } from './components/transmar'
import { Comet } from './components/comet'
import { Transzela } from './components/transzela'
import { Ifac } from './components/ifac'
import { Movilbus } from './components/movilbus'
import { Pidesoft } from './components/pidesoft'

const queryClient = new QueryClient()

const integrations = [
  {
    id: 'jelaf',
    name: 'Jelaf',
    component: Jelaf,
    ready: true
  },
  {
    id: 'palmawari',
    name: 'Palma/Wari',
    component: PalmaWari,
    ready: true
  },
  {
    id: 'perubus',
    name: 'Perubus',
    component: Perubus,
    ready: true
  },
  {
    id: 'quatrobus',
    name: 'Quatrobus',
    component: Quatrobus,
    ready: true
  },
  {
    id: 'kronos',
    name: 'Kronos',
    component: Kronos,
    ready: true
  },
  {
    id: 'oltursa',
    name: 'Oltursa',
    component: Oltursa,
    ready: true
  },
  {
    id: 'transmar',
    name: 'Transmar',
    component: Transmar,
    ready: true
  },
  {
    id: 'comet',
    name: 'Comet',
    component: Comet,
    ready: true
  },
  {
    id: 'transzela',
    name: 'Transzela',
    component: Transzela,
    ready: true
  },
  {
    id: 'movilbus',
    name: 'Movilbus',
    component: Movilbus,
    ready: true
  },
  {
    id: 'ifac',
    name: 'Ifac',
    component: Ifac,
    ready: true
  },
  {
    id: 'pidesoft',
    name: 'Pidesoft',
    component: Pidesoft,
    ready: true
  }
]

function App() {
  const [selectedIntegration, setSelectedIntegration] = useState("jelaf")

  const SelectedComponent = integrations.find(i => i.id === selectedIntegration)?.component;

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ display: 'flex', height: '100vh' }}>
        <aside style={{ width: 220, background: '#1a1a1a', color: '#fff', padding: '1rem 0', boxShadow: '2px 0 8px #0002' }}>
          <nav>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {integrations.map((integration) => (
                <li key={integration.id}>
                  <button
                    style={{
                      width: '100%',
                      background: selectedIntegration === integration.id ? '#ff763e' : 'transparent',
                      color: selectedIntegration === integration.id ? '#fff' : '#fff',
                      border: 'none',
                      padding: '1rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontWeight: selectedIntegration === integration.id ? 'bold' : 'normal',
                      fontSize: '1rem',
                      transition: 'background 0.2s',
                    }}
                    onClick={() => setSelectedIntegration(integration.id)}
                  >
                    {integration.name} {integration.ready ? <span style={{color:'#43a047',fontSize:'0.8rem'}}>✓</span> : <span style={{color:'#ffc107',fontSize:'0.8rem'}}>⌛</span>}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main style={{ flex: 1, padding: '2rem', background: '#242424', overflowY: 'auto' }}>
          {SelectedComponent ? <SelectedComponent /> : <div>Selecciona una integración</div>}
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
