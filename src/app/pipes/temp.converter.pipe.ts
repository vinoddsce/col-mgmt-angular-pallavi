import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name: 'tempConv'
})
class TempConverterPipe implements PipeTransform {
    // transform(value: number, unit: string, postFix: string) {
    //     if (value && !isNaN(value)) {
    //         if (unit === 'C') {
    //             var temperature = (value - 32) / 1.8;
    //             return temperature.toFixed(2) + postFix;
    //         } else if (unit === 'F') {
    //             var temperature = (value * 1.8) + 32
    //             return temperature.toFixed(2) + postFix;
    //         }
    //     }
    //     return;
    // }

    transform(value: number, ...params: any[]) {
        console.log("params: ", params);
        if (value && !isNaN(value)) {
            if (params[0] === 'C') {
                var temperature = (value - 32) / 1.8;
                return temperature.toFixed(2) + params[1];
            } else if (params[0] === 'F') {
                var temperature = (value * 1.8) + 32
                return temperature.toFixed(2) + params[1];
            }
        }
        return;
    }
}

export default TempConverterPipe;