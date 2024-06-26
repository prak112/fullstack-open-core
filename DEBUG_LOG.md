# ISSUE - RESOLVE 
- Issue #1: [Unable to use Vite template to create React application](#issue-1-unable-to-use-vite-template-to-create-react-application)
- Issue #2: [Unable to run the react app created using Vite](#issue-2-unable-to-run-the-react-app-created-using-vite)
- Issue #3: [Unable to render Total exercises component](#issue-3-unable-to-render-total-exercises-component)

<br>
<hr>

## Issue #1: Unable to use Vite template to create React application
- **CONTEXT** : 
    - Unable to use `Vite` template to create `React` application when using 
    ```bash
        $ npm create vite@latest project-name -- --template react
    ```
- **ERROR** : 
    ```bash
        npm ERR! code UNABLE_TO_VERIFY_LEAF_SIGNATURE 
        npm ERR! errno UNABLE_TO_VERIFY_LEAF_SIGNATURE 
        npm ERR! request to https://registry.npmjs.org/create-vite failed, reason: unable to verify the first certificate
    ```
- **SOLUTION** : 
    - Use `Vite` with version of `node` > 15, currently using 18.20.2 
    - If possible, use a specific version of `Vite`, currently using 5.1.0
    ```bash
        $ npm create vite@5.1.0 project-name -- --template react
    ```
<hr>

## Issue #2: Unable to run the react app created using Vite
- **CONTEXT** : 
    - Unable to run the react app created using `Vite`
- **ERROR** :
    ```bash
        (node:23012) UnhandledPromiseRejectionWarning: SyntaxError: Unexpected token '??='
        at Loader.moduleStrategy (internal/modules/esm/translators.js:149:18)
    ```
- **SOLUTION** :
    - Use `node` version > 15

<hr>

## Issue #3: Unable to render Total exercises component
- **CONTEXT** :
    - Unable to render `Total` exercises component by passing `parts` object from `App` (Parent/Top level component) to `Total` component
    ```jsx
        ...

        const Total = (props) => {
            const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
            return(
                <>
                <p>Total number of exercises : { total }</p>
                </>
            )
        }

        const App = (props) => {
            ...
            return (
                <>
                ...
                <Total exercises = { course.parts }/>
                ...
                </>
            )
        }

    ``` 
- **ERROR** :
    ```javascript
        Uncaught TypeError: Cannot read properties of undefined
    ```
- **SOLUTION** :
    - Always label `prop` attributes being transactioned between Parent and Child components with the same name
        ```jsx
        ...
        
        const Total = (props) => {
            const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
            return(
                <>
                <p>Total number of exercises : { total }</p>
                </>
            )
        }

        const App = (props) => {
            ...
            return (
                <>
                ...
                <Total parts = { course.parts }/>
                ...
                </>
            )
        }

<hr>

