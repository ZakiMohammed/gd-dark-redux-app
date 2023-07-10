import { useSelector, useDispatch } from 'react-redux';
import { toggle } from './reducers/ThemeReducers';

function App() {
  const name = useSelector(state => state.theme.name);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggle());
  };

  return (
    <>
      <h1>🤍 Dark Redux App</h1>
      <button type="button" onClick={toggleTheme}>
        {name === 'light' ? '🌙' : '☀️'} 
        Toggle Card Theme
      </button>
      <article data-theme={name}>
        <h2>🧁Amazing Words!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          inventore eius aspernatur odit, voluptates perferendis similique
          debitis ut ratione eveniet.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          inventore eius aspernatur odit, voluptates perferendis similique
          debitis ut ratione eveniet.
        </p>
      </article>
    </>
  );
}

export default App;
