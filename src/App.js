import React from "react"

function App({ domElement }) {
  const room = domElement.getAttribute("data-room")
  return (
    <div className="bspk_widget__chat">
      <iframe style={styles.iframe} src={`https://14611c33125a.ngrok.io/widget/welcome?room=${room}`} title="Widget chat"></iframe>
    </div>
  );
}


const styles = {
  iframe: {
    width: '400px',
    height: '400px',
    position: 'absolute',
    bottom: '20px',
    right: '20px'
  }
}

export default App;
