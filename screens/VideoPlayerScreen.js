import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

// const instance = axios.create({});

function VideoPlayerScreen({ navigation, route }) {
  const [sessions, setSessions] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(route.params.url)
  }, [route.params.url]);

  return (
    <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ height: 500, width: 300 }}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> // <--add header styles if needed
                    <body>
                      <div id="baseDiv">
                      
<iframe width="560" height="315" src="https://www.youtube.com/embed/Gz6WyN7E1Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                      </div> //<--- add your iframe here
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
  );
}



export default VideoPlayerScreen;
