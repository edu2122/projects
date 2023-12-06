
# App TODO 

### Funcionalidades de la App

    1. Agregar un TODO ✅
    2. Eliminar un TODO ✅
    3. Marcar y desmarcar un TODO como completado ✅
    4. Filtrar TODOS (All, completes, no completes)
    5. 

### Etapas del desarrollo
    1. Funcionalidades
    2. Estilos de la aplicacion
    3. Conectar una base de datos para la persistencia de datos
    4. Desplegar aplicacion

### Tareas 
    1. Levantar entorno con Vite ✅ 
    2. Limpiar el entorno de Vite por defecto ✅
    3. Usar estilos provisionales con simple CSS ✅
    4. Empezar a crear la aplicacion en el App.jsx ✅
    5. Crear componente Todos ✅
        - En el componente Todos se reciben tres props el array de todos, y dos funciones estas props vienen del componente App.jsx
        - Este componente se encarga de retornar, es decir renderizar una lista desordenada con cada uno de los Todos que vienen del array, para ello se recorre el array con el metodo map
    6. Crear componente Todo ✅
        - En el componente Todo se reciben las siguientes props {id, title, completed, onDeleteTodo, onCheck} el id, title, y completed son propiedades de los Todos, en cambio el onDeleteTodo y onCheck son funciones, que vienen del componente principal App.jsx, estas funciones se encargan de eliminar y marcar o desmarcar un todo, respectivamente.
        - Luego el componente Todo se encarga de renderizar, el texto , el boton de eliminar y un input de tipo check, para marcar o desmarcar si el todo se hizo
    7. Crear componente header ✅
        - En el componente header solo renderiza el titulo de la app, y otro componente llamado CreateTodo, este componente recibe como prop a onAddTodo, el cual se pasara al componente CreateTodo
    8. Crear componente CreateTodo ✅
        - Este componente basicamente se encargara de crear nuevos Todos, para ello se recibe como prop onAddTodo desde app.jsx , ademas creamos un estado  llamado title, que se encargara de manejar el estado de la nueva tarea, tenemos dos funciones en este componente, handleSubmit y handleChange , basicamente sirven para controlar el formulario que renderizamos en el componente
        - este componente se encarga de renderizar un formulario, el cual tiene un input de tipo texto para escribir el nuevo todo, y un boton para agregar el nuevo todo
    9. Crear componente Foote✅
        - recibe 3 props desde la app.jsx, activeTodos, completeTodos, onFilterChange estas 3 props se encargan de: visualizar los todos pendientes, los todos completados y onFilterChange es una funcion que se encarga de setear el estado filter en la app.jsx y ademas se pasa como prop al componente Filters
    10. Crear componente Filters ✅
        - Recibe como prop onFilterChange, luego este se encargara de retornar es decirr renderizar una lista desordenada, donde cada li tendra un elemento a con la propiedad onClick, el cual se encargara de evitar el comporamiento por defecto del onClick y luego le pasara a la funcion el filtro deseado (all, actives, completes)
        - optimizar Filters
        Optimize el filters de manera que usara las constantes TODO_FILTERS y FILTERS_BUTTONS, con esto ahora el componente filters retornara una lista desordenada, la cual va renderizarse desde el objeto FILTERS_BUTTONS, y ademas se le pasara como prop a cada elemento a la funcion onFilterChange, la cual se encargara de setear el estado filter en la app.jsx y ademas se pasa como prop al componente Filters

