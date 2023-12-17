consumir api com react-query

yarn add react-query -> install dependencia do react-query

arquivo index.js -> importar queryclient para envolver toda aplicação.
todos os componentes que estiverem dentro do index.js podem fazer essa requisição
import {QueryClient, QueryClientProvider} from 'react-query'

