import './App.css'

function TituloFormulario(props) {
  return (
    <h2>{props.children}</h2>
  )
}


function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <fieldset>
        <label for="nome">
          Qual o nome do evento?
        </label>

        <input type="text" id="nome" name="nome" placeholder='Sumer dev hits' required />
        </fieldset>
    </form>
      )

}

function App() {
  return (
    <main>
      <header>
        <img src="/banner.png" alt=''/>
      </header>
      <FormularioDeEvento />
    </main>
  )
}

export default App
