import Header from "./components/Header"

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-zinc-800 text-white">
      <div className="w-full h-20 bg-zinc-700 flex items-center justify-center">
        <Header />
      </div>

      <div className="flex-1 bg-zinc-600"> 
        
      </div>

      <div className="h-10 flex items-center justify-center">
        <p>Criado por Fernando Ely </p>
      </div>
    </div>
      
  )
}

export default App
