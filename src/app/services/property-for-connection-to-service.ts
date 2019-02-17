import { Injectable } from '@angular/core';

/**
 * Singeltone свойства подключения к сервису
 */
@Injectable()
export class PropertyForConnectionToService{
    // public static HOST_URI      = "84.237.62.137"
    public static HOST_URI      = "localhost"
    // public static PORT_URI      = "8180"
    public static PORT_URI      = "8080"
    // public static NAME_SERVICE  = "/warehouse/"
    public static NAME_SERVICE  = "/"
    public static PROTOCOL_URI  = "http"


    public static NAME_SOCKET_SERVICE = "websocket-supplier"

    /**
     * Возращает строку подключения к сервису
     * @return  {@link string} возращаемый тип значения
     */
    public static getURI(): string{

        return  PropertyForConnectionToService.PROTOCOL_URI + '://' +
                PropertyForConnectionToService.HOST_URI     + ':'   +
                PropertyForConnectionToService.PORT_URI     + 
                PropertyForConnectionToService.NAME_SERVICE ;
    }

    public static getSocketURI():string{
        return  PropertyForConnectionToService.PROTOCOL_URI + '://' +
                PropertyForConnectionToService.HOST_URI     + ':'   +
                PropertyForConnectionToService.PORT_URI     + 
                PropertyForConnectionToService.NAME_SERVICE     + 
                PropertyForConnectionToService.NAME_SOCKET_SERVICE ;
    }


    // public static NAME_SERVICE_FILE_FORMAT = "fileformat";
}