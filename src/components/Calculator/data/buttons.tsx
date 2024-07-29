import { BtnStyle } from "@/utils/types";

export const buttons: {numbers: {name: string, style: string}[], operators: {name: string, style: string, action?: (prevValue: number, nextValue: number) => number}[]} =
{
    numbers: [
        {
            name: "7",
            style: BtnStyle.Base
        },
        {
            name: "8",
            style: BtnStyle.Base
        },
        {
            name: "9",
            style: BtnStyle.Base
        },
        {
            name: "4",
            style: BtnStyle.Base
        },
        {
            name: "5",
            style: BtnStyle.Base
        },
        {
            name: "6",
            style: BtnStyle.Base
        },   
        {
            name: "1",
            style: BtnStyle.Base
        },
        {
            name: "2",
            style: BtnStyle.Base
        },
        {
            name: "3",
            style: BtnStyle.Base
        },
        {
            name: "00",
            style: BtnStyle.Base
        },
        {
            name: "0",
            style: BtnStyle.Base
        },
        {
            name: ",",
            style: BtnStyle.Base
        },
    ],
    operators: [
        {
            name: "C",
            style: BtnStyle.Base
        },
        {
            name: "√",
            style: BtnStyle.Base,
            action: (prevValue: number, nextValue: number) => prevValue * Math.sqrt(nextValue)
        },
        {
            name: "%",
            style: BtnStyle.Base,
            action: (prevValue: number, nextValue: number) => (prevValue / 100) * nextValue
        },
        {
            name: "/",
            style: BtnStyle.Base,
            action: (prevValue: number, nextValue: number) => prevValue / nextValue
        }, 
        {
            name: "×",
            style: BtnStyle.Base,
            action: (prevValue: number, nextValue: number) => prevValue * nextValue
        },
        {
            name: "-",
            style: BtnStyle.Base,
            action: (prevValue: number, nextValue: number) => prevValue - nextValue
        },
        {
            name: "+",
            style: BtnStyle.Base,
            action: (prevValue: number, nextValue: number) => prevValue + nextValue
        },
        
        {
            name: "=",
            style: BtnStyle.Fill
        }
    ]
}