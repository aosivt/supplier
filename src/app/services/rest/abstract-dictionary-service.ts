import {
    Component, 
    Inject,
    Injectable} from '@angular/core';
import { 
    Jsonp, 
    URLSearchParams,
    Http, 
    Response,
    Headers, 
    RequestOptions } from '@angular/http';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';

import { PropertyForConnectionToService } from '../property-for-connection-to-service';

/**
 * Объект создан для получения списков справочников с сервиса БД
 */
@Injectable()
export abstract class AbstractDictionaryService{

    private headers: Headers;

    constructor(private http: Http){
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.headers.set('Access-Control-Allow-Method'      ,'POST' );
        this.headers.set('Access-Control-Allow-Credentials' ,'true' );
        this.headers.set('Access-Control-Allow-Origin'      ,'*'    );
    }

    /**
     * Возращает Observable<Response> определенного справочника указанного в параметре метода
     * @param dictionary dictionary - строковое наименование справочника на стороне сервиса
     * @returns возращает созданный Observable<Response> [Observable<Response>]
     * {@link Observable<Response>}
     */
    public getObserverResponseDictionary(dictionary: string): Observable<Response>{
        return this.http.post(
            this.getHostWithPortApiService(), 
            this.getOptionsForConnection(dictionary)
        );
    }

    /**
     * Возращает опции подключения к web сервису для таблици отображения справочника
     * @param dictionary dictionary - строковое наименование справочника на стороне сервиса
     * @returns создает RequestOptions опцию подключения для post http запроса [RequestOptions]
     * {@link RequestOptions}
     */
    private getOptionsForConnection(dictionary: string):RequestOptions{
        return  new RequestOptions({    headers: this.headers,
                                        params: "dict = " + dictionary }); 
    }

    /**
     * Возращает Observable<Response> определенного справочника указанного в параметре метода
     * @param pathMethodService string - строковое значение наименования метода web сервиса
     * @param params URLSearchParams - передаваемые параметры в метод
     * @param body any - 
     * @returns возращает созданный Observable<Response> [Observable<any>]
     * {@link Observable<any>}
     */
    public getObserverResponseDictionaryWithAction( pathMethodService: string, 
                                                    params: URLSearchParams, 
                                                    body: any): Observable<any>{
        console.log(this.getFullPathToWebServiceByPathService(pathMethodService));
        return this.http.post(
            this.getFullPathToWebServiceByPathService(pathMethodService), params,
            this.getRequestOptions(params,body)
        );
    }

    /**
     * Возращает опции подключения к web сервису для добавление, изменения и удаления 
     * элемента из справочника
     * @param dictionary dictionary - строковое наименование справочника на стороне сервиса
     * @returns создает RequestOptions опцию подключения для post http запроса [RequestOptions]
     * {@link RequestOptions}
     */
    private getRequestOptions(params: URLSearchParams, body: any): RequestOptions{
        
        return  new RequestOptions({headers: this.headers,
                                    params: params,
                                    body: body }); 
    }
     
    /**
     * Возращает строку подключения адреса web сервиса формата http://[HOST]:[PORT]/
     * @returns возращает строку подключения (точку входа) к web сервису {@link string}
     */
    private getHostWithPortApiService():string{
        return PropertyForConnectionToService.getURI();
    }

    /**
     * Возращает строку подключения к определенному методу web сервиса
     * формата http://[HOST]:[PORT]/pathService
     * @param pathService pathService - принимает строковае значение с 
     * точным адресом метода сервиса после http://[HOST]:[PORT]/
     * @returns возращает строку подключения (точку входа) к web сервису {@link string}
     */
    private getFullPathToWebServiceByPathService(pathMethodService: string): string{
        return PropertyForConnectionToService.getURI() + pathMethodService;
    }

    /**
     * Возращает созданный в конструкторе Headers заголовок для подключение к сервису по указанному URL
     * @returns возращает созданный в конструкторе Http [Http]{@link Headers}
     */
    private getHeadersForConnection(): Headers{
        return this.headers;
    }

    /**
     * Возращает Http для подключение к сервису по указанному apiURL
     * @returns возращает созданный в конструкторе Http [Http]{@link Http}
     */
    private getHttpConnect(): Http{
        return this.http;
    }

}