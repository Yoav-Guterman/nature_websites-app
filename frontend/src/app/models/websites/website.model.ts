import { Region } from "../regions/region.model";
import { Draft } from "./draft.model";

export interface Website extends Draft {
    id: string,
    region: Region
}
