import React from "react"

const { Provider, Consumer } = React.createContext()

class UserContextProvider extends React.Component {
    render() {
        return (

            <Provider value={"Tommy"}>
                {this.props.children}
            </Provider>

        )
    }
}


export { UserContextProvider, Consumer as UserContextConsumer }