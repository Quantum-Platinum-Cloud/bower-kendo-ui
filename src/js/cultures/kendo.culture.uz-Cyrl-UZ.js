/** 
 * Copyright 2022 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Licensed under the Apache License, Version 2.0 (the "License");                                                                                                                                      
 * you may not use this file except in compliance with the License.                                                                                                                                     
 * You may obtain a copy of the License at                                                                                                                                                              
 *                                                                                                                                                                                                      
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                                                                                                       
 *                                                                                                                                                                                                      
 * Unless required by applicable law or agreed to in writing, software                                                                                                                                  
 * distributed under the License is distributed on an "AS IS" BASIS,                                                                                                                                    
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                                                                                                             
 * See the License for the specific language governing permissions and                                                                                                                                  
 * limitations under the License.                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function( window, undefined ) {
    kendo.cultures["uz-Cyrl-UZ"] = {
        name: "uz-Cyrl-UZ",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": " ",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "Uzbekistani Som",
                abbr: "UZS",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": " ",
                ".": ",",
                groupSize: [3],
                symbol: "сўм"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["якшанба","душанба","сешанба","чоршанба","пайшанба","жума","шанба"],
                    namesAbbr: ["якш","душ","сеш","чор","пай","жум","шан"],
                    namesShort: ["як","ду","се","чо","па","жу","ша"]
                },
                months: {
                    names: ["январ","феврал","март","апрел","май","июн","июл","август","сентябр","октябр","ноябр","декабр"],
                    namesAbbr: ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"]
                },
                AM: ["ТО","то","ТО"],
                PM: ["ТК","тк","ТК"],
                patterns: {
                    d: "dd/MM/yyyy",
                    D: "dddd, dd MMMM, yyyy",
                    F: "dddd, dd MMMM, yyyy HH:mm:ss",
                    g: "dd/MM/yyyy HH:mm",
                    G: "dd/MM/yyyy HH:mm:ss",
                    m: "d MMMM",
                    M: "d MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "MMMM, yyyy",
                    Y: "MMMM, yyyy"
                },
                "/": "/",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));