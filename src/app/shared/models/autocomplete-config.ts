import { Observable } from "rxjs";

export interface AutocompleteConfigurations {
    callback?: (searchValue?: string) => Observable<any[]>;
    valueProperty?: string;
    dropdownFormatter?: (value: any) => string;
}