interface IFormatFunc {
    (format ?: string) : string;
    formatDate(date : Date) : string;
    formatTime(date : Date) : string;
    formatDateTime(date : Date) : string;
}

// declare global {
//     interface Array<T> {
//         remove(index : number) : Array<T>
//     }
//
//     interface Date {
//         format : IFormatFunc;
//     }
// }


interface Array<T> {
    remove(index : number) : Array<T>
}

interface Date {
    format : IFormatFunc;
}



