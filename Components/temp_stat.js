import {Text, View} from 'react-native';
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { Picker } from "@react-native-picker/picker";
import {
  LineChart,
} from "react-native-chart-kit";

export default function Temp_stat(){

    const [selectedValue, setSelectedValue] = useState("Giorno");

    const label_giorno = [
    "00-04",
    "04-08",
    "08-12",
    "12-16",
    "16-20",
    "20-24"
    ];

    const label_settimana = [
    "Lun",
    "Mar",
    "Mer",
    "Gio",
    "Ven",
    "Sab",
    "Dom"
    ];

    const label_mese = [
    "Gen",
    "Feb",
    "Mar",
    "Apr",
    "Mag",
    "Giu",
    "Lug",
    "Ago",
    "Set",
    "Ott",
    "Nov",
    "Dic"
    ];

    var scelta = [];

  switch(selectedValue){

        case "giorno":
            scelta = label_giorno.slice();
            break;
        case "settimana":
            scelta = label_settimana.slice();
            break;
        case "mese":
            scelta = label_mese.slice();
            break;
        default:
            scelta = label_giorno.slice(); 
            break;

    }
  
    return(

        <View>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 160 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Giorno" value="giorno" />
            <Picker.Item label="Settimana" value="settimana" />
            <Picker.Item label="Mese" value="mese" />
          </Picker>

  
          
        <Text>Temperatura {selectedValue}:</Text>

            <LineChart
              data={{
 
                labels: scelta,
                datasets: [
                  {
                    data: [
                     20,
                     30,
                     40,
                     25,
                     25,
                     20,
                     30,
                     40,
                     25,
                     25,
                     0
                    ]
                  }
                ]
              }}
              width={Dimensions.get("window").width} // from react-native
              height={220}
              yAxisLabel="°C"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#b0342c",
                backgroundGradientTo: "#b0342c",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726"
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
        </View>

    )
}