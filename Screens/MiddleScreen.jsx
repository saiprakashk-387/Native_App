import React, {useState} from 'react';
import {ScrollView, Switch, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import {vs2015} from 'react-syntax-highlighter/styles/hljs';

const MiddleScreen = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const html = `<html>
    <head>
     <title>WebView Example</title>
        <style>
        body {
          text-align: center;
          margin: 0;
          display: flex; 
          align-items: center;
          justify-content: center; 
          height: 80vh;
         }
          h1 {
              color: #333;
              display:block;
            }
           button {
             font-size: 20px; 
             padding: 15px 30px; 
             background-color: #3498db; 
             color: #fff; 
             border: none; 
             border-radius: 5px; 
             cursor: pointer;
            }
        </style>
    </head>
    <body>
       <div>        
       <h1>Middle Screen</h1><br>
       <button onclick="triggerLeftAlert()">Navigate Left </button> &nbsp; &nbsp;
       <button onclick="triggerRightAlert()">Navigate Right</button><br>
       </div>
      <script>
         function triggerRightAlert() {
         window.ReactNativeWebView.postMessage('right');
        }
         function triggerLeftAlert() {
         window.ReactNativeWebView.postMessage('left');
        }
      </script>     
    </body>
</html>`;

  const handleWebView = event => {
    const message = event.nativeEvent.data;
    navigation.navigate(`${message}`);
  };

  const handleCheckBoxToggle = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          WebView
        </Text>
        <Switch
          value={isChecked}
          onValueChange={handleCheckBoxToggle}
          trackColor={{false: '#A9A9A9', true: '#81b0ff'}}
          thumbColor={isChecked ? '#81b0ff' : '#f4f3f4'}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Code
        </Text>
      </View>
      {isChecked ? (
        <SyntaxHighlighter
          language="htmlbars"
          style={vs2015}
          highlighter="hljs">
          {html}
        </SyntaxHighlighter>
      ) : (
        <WebView source={{html}} onMessage={handleWebView} />
      )}
    </>
  );
};

export default MiddleScreen;
