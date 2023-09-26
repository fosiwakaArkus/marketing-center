import { Caracter, LocationOrigin } from "./rickandmorty.interface";

export interface PropsCard extends Caracter{
    expandedCard?: boolean;
    width?: string;
}