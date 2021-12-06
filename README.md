# Investigación de Use

## useEffect
Este hook normalmente es usado para la inicialización de variables, llamadas a APIs o para limpiar un componente antes de desmontarlo del DOM.

Es el equivalente funcional a componentDidMount, componentDidUpdate, y componentWillUnmount en los componentes de clase.

La llamada a useEffect acepta una función como argumento. Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y después cada vez que el componente se actualice.

## useRef
useRef devuelve un objeto ref mutable cuya propiedad .current se inicializa con el argumento pasado (initialValue). El objeto devuelto se mantendrá persistente durante la vida completa del componente.

En esencia, useRef es como una “caja” que puedes mantener en una variable mutable en su propiedad .current.

Puede que estes familiarizado con las referencias principalmente como un medio para acceder al DOM. Si pasas un objeto de referencia a React con <div ref={myRef} />, React configurará su propiedad .current al nodo del DOM correspondiente cuando sea que el nodo cambie.

Sin embargo, useRef() es útil para más que el atributo ref. Es conveniente para mantener cualquier valor mutable que es similiar a como usarías campos de instancia en las clases.

Esto funciona debido a que useRef() crea un objeto JavaScript plano. La única diferencia entre useRef() y crear un objeto {current: ...} por ti mismo es que useRef te dará el mismo objeto de referencia en cada renderizado.

Ten en cuenta que useRef no notifica cuando su contenido cambia. Mutar la propiedad .current no causa otro renderizado. Si quieres correr algún código cuando React agregue o quite una referencia de un nodo del DOM, puede que quieras utilizar en su lugar una referencia mediante callback.


## useContext

Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual. El valor actual del contexto es determinado por la propiedad value del <MyContext.Provider> ascendentemente más cercano en el árbol al componente que hace la llamada.

Cuando el <MyContext.Provider> ascendentemente más cercano en el árbol se actualiza, el Hook activa una renderización con el value más reciente del contexto pasado a ese proveedor MyContext. Incluso sí un ancestro utiliza React.memo o shouldComponentUpdate, una nueva renderización aún pasará empezando con el componente en si mismo usando useContext.