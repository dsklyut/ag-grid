import { ChartAxis } from "../chartAxis";
export declare class TimeAxis extends ChartAxis {
    static className: string;
    static type: string;
    constructor();
    private _nice;
    set nice(value: boolean);
    get nice(): boolean;
    set domain(value: Date[]);
    get domain(): Date[];
}
