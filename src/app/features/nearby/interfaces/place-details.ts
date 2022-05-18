import { Coordinates } from "maplibre-gl";

export interface PlaceDetails {
    address?: string;
    id?: string;
    allImg?: Array<string>;
    city?: string;
    cord?: Coordinates;
    desc?: string;
    hours?: Array<number>;
    name?: string;
    phone?: string;
    rating?: number;
    state?: string;
    subtype?: string;
    type?: string;
    website?: string;
}
