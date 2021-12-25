const path=require('path');

module.exports={
    
    mode:"development",

    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                
                    test:/\.(png|jpe?g|gif)$/i,
                   
                      
                        use: ['file-loader',],
                         
                    
                  
            }
    
        ]
      }
    }