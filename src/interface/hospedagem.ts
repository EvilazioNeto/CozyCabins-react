export interface Location {
    local: string;
    local_proximo: string;
}

export interface Room {
    tipo: string;
    caracteristicas: string[];
    inclusions: string[];
}
 
export interface Cabana {
    id: number;
    nome: string;
    preco: number;
    desconto_por_noite: number;
    local: string;
    avaliacao: number;
    localizacao: Location;
    pay_at_hotel: boolean
    amenidades_populares: string[];
    amenidades: {
        Basic: string[];
        Travel: string[];
        Business_Services: string[];
        Food_and_Beverage: string[];
        Recreation_Facilities: string[];
        Personal_Services: string[];
    };
    descricao: string;
    quartos: Room[];
    about_this_area: string;
    whats_nearby: string[];
    check_in_time: string;
    check_out_time: string;
    imagens: {
        thumbnail: string;
        secundarias: string[];
    };
}

export interface CabanasData {
    cabanas: Cabana[];
}