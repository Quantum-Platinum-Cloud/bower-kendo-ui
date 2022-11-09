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
(function (factory) {
    typeof define === 'function' && define.amd ? define(['kendo.core'], factory) :
    factory();
})((function () {
    (function( window, undefined$1 ) {
        kendo.cultures["fy"] = {
            name: "fy",
            numberFormat: {
                pattern: ["-n"],
                decimals: 2,
                ",": ".",
                ".": ",",
                groupSize: [3],
                percent: {
                    pattern: ["-n%","n%"],
                    decimals: 2,
                    ",": ".",
                    ".": ",",
                    groupSize: [3],
                    symbol: "%"
                },
                currency: {
                    name: "",
                    abbr: "",
                    pattern: ["$ n-","$ n"],
                    decimals: 2,
                    ",": ".",
                    ".": ",",
                    groupSize: [3],
                    symbol: "€"
                }
            },
            calendars: {
                standard: {
                    days: {
                        names: ["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"],
                        namesAbbr: ["si","mo","ti","wo","to","fr","so"],
                        namesShort: ["si","mo","ti","wo","to","fr","so"]
                    },
                    months: {
                        names: ["Jannewaris","Febrewaris","Maart","April","Maaie","Juny","July","Augustus","Septimber","Oktober","Novimber","Desimber"],
                        namesAbbr: ["Jan","Feb","Mrt","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Des"]
                    },
                    AM: ["AM","am","AM"],
                    PM: ["PM","pm","PM"],
                    patterns: {
                        d: "dd-MM-yyyy",
                        D: "dddd d MMMM yyyy",
                        F: "dddd d MMMM yyyy HH:mm:ss",
                        g: "dd-MM-yyyy HH:mm",
                        G: "dd-MM-yyyy HH:mm:ss",
                        m: "d MMMM",
                        M: "d MMMM",
                        s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                        t: "HH:mm",
                        T: "HH:mm:ss",
                        u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                        y: "MMMM yyyy",
                        Y: "MMMM yyyy"
                    },
                    "/": "-",
                    ":": ":",
                    firstDay: 1
                }
            }
        };
    })();

}));
