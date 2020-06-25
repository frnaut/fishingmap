import { ImageInteface } from './image.interface';

export interface Marker {
    id?: string;
    latitud: number;
    longitud: number;
    titulo?: string;
    descripcion?: string;
    img?: ImageInteface[];
    date?: Date;
}