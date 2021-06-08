import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import {View, Dimensions} from 'react-native';

// const instance = axios.create({});

function VideoPlayerScreen({ navigation, route }) {
  const windowWidth = Dimensions.get('window').width;
  const [sessions, setSessions] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(route.params.url)
  }, [route.params.url]);

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
    <WebView
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          style={{ height: 815, width: windowWidth, display: "flex", justifyContent: "center", alignItems: "center" }}
          userAgent={"Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3714.0 Mobile Safari/537.36"}
          source={{
            html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head>
                    <body style="display: flex; justify-content: center; align-items; center; height: 100%">
                      
                      <iframe width="${windowWidth*2.6}" height="815" src="https://www.youtube.com/embed/${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                      
                      
                    </body>
                  </html>
            `,
          }}
          automaticallyAdjustContentInsets={false}
        />
        </View>
  );
}



export default VideoPlayerScreen;
