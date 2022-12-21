import React from "react"

export default class App3 extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  componentDidMount() {
    console.log("mount " + this.state.count)
  }
  componentDidUpdate() {
    console.log("update " + this.state.count)
  }

  componentWillUnmount(): void {
    console.log("unmount " + this.state.count)
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
      </div>
    )
  }
}
