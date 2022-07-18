import React from 'react';
import Button from "@mui/material/Button";
import {utils, writeFile, read} from "xlsx";
// import sample from './files/sample.xlsx';
import {ESK_ADD, ESK_CHANGE, NET_RES, SED} from './samples'

export const SamplesButton = ({profileData}) => {//TODO Страница отображает кнопки для выгрузки Excel файлов
        console.log('profiledata', profileData)
        const testDataObject = {
            fio: 'Сидоров Михаил Борисович', //B3 | C4(имя A4, Фамилия B4) | C23 | D5(имя B5, Фамилия C5)
            organization: 'МОСО', // B4 | H4 | D3 и F23 | I5
            department: 'Отдел реализации проектов и программ', //B5 | G4 | F23 | H5
            position: 'Инженер', // B6 | F4 | D23 и G23 | G5
            office: '31', // B7 | D4 | - | E5
            telephone: '46-59-92', // B8 | E4 | - | F5
            address: 'Ленина 156', // - | I14 | - | J5
            city: 'Южно-Сахалинск', // - | J5 | - | K5
            postcode: ' 693019', // - | K4 | - | L5
            sedAction: 'добавить', // - | - | E23 |
            login: 'm.sidorov', // - | - | - | A5 |
        }
        // const sheetsJSON = [
        //     {
        //         "Наименование организации": null,
        //         "Адрес сайта": null,
        //         "Информация об отвественном за  администрирование официального сайта": "ФИО",
        //         "Column4": "Должность",
        //         "Column5": "Телефон",
        //         "Column6": "Email",
        //         "Column7": "Реквизиты приказа о назначении",
        //         "Информация об отвественном за защиту информациии официального сайта": "ФИО",
        //         "Column9": "Должность",
        //         "Column10": "Телефон",
        //         "Column11": "Email",
        //         "Column12": "Реквизиты приказа о назначении",
        //         "Располжение сайта ( ГИС \"ЕЗХП\"\/ Частный хостинг\/Собственные ресурсы\/Ресурсы ЦОД ПСО)": null,
        //         "Комментарий (Если сайт не в ГИС \"ЕЗХП\", причина)": null,
        //         "Данные о соответствии хостинговой площадки требованиям по защите информации \n(для Частного хостинга, собственных ресурсов и ресурсов ЦОД ПСО)": null,
        //         "Сайт обрабатывает персональные данные (Да\/Нет)": null,
        //         "Сайт является ГИС\/МИС (Да\/Нет)": null,
        //         "Реквизиты НПА  закрепляющего  статус и правовое положение официального сайта": null
        //     }
        // ]
        // const worksheet = utils.json_to_sheet(sheetsJSON);
        // console.log('worksheet', worksheet)
        // const workbook = utils.book_new();
        // const sampleNetRes = NET_RES;
        // const sampleSed = SED;
        // const sampleEskAdd = ESK_ADD;
        // const sampleEskChange = ESK_CHANGE;

        const workbook = {
            "Directory": {
                "workbooks": [
                    "/xl/workbook.xml"
                ],
                "sheets": [
                    "/xl/worksheets/sheet1.xml"
                ],
                "charts": [],
                "dialogs": [],
                "macros": [],
                "rels": [],
                "strs": [
                    "/xl/sharedStrings.xml"
                ],
                "comments": [],
                "threadedcomments": [],
                "links": [],
                "coreprops": [
                    "/docProps/core.xml"
                ],
                "extprops": [
                    "/docProps/app.xml"
                ],
                "custprops": [],
                "themes": [
                    "/xl/theme/theme1.xml"
                ],
                "styles": [
                    "/xl/styles.xml"
                ],
                "vba": [],
                "drawings": [],
                "metadata": [],
                "people": [],
                "TODO": [],
                "xmlns": "http://schemas.openxmlformats.org/package/2006/content-types",
                "calcchain": "",
                "sst": "/xl/sharedStrings.xml",
                "style": "/xl/styles.xml",
                "defaults": {
                    "bin": "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings",
                    "rels": "application/vnd.openxmlformats-package.relationships+xml",
                    "xml": "application/xml"
                }
            },
            "Workbook": {
                "AppVersion": {
                    "appName": "xl",
                    "appname": "xl",
                    "lastEdited": "6",
                    "lastedited": "6",
                    "lowestEdited": "6",
                    "lowestedited": "6",
                    "rupBuild": "14420",
                    "rupbuild": "14420"
                },
                "WBProps": {
                    "defaultThemeVersion": 164011,
                    "allowRefreshQuery": false,
                    "autoCompressPictures": true,
                    "backupFile": false,
                    "checkCompatibility": false,
                    "CodeName": "",
                    "date1904": false,
                    "filterPrivacy": false,
                    "hidePivotFieldList": false,
                    "promptedSolutions": false,
                    "publishItems": false,
                    "refreshAllConnections": false,
                    "saveExternalLinkValues": true,
                    "showBorderUnselectedTables": true,
                    "showInkAnnotation": true,
                    "showObjects": "all",
                    "showPivotChartFilter": false,
                    "updateLinks": "userSet"
                },
                "WBView": [
                    {
                        "xWindow": "0",
                        "xwindow": "0",
                        "yWindow": "0",
                        "ywindow": "0",
                        "windowWidth": "28800",
                        "windowwidth": "28800",
                        "windowHeight": "12300",
                        "windowheight": "12300",
                        "activeTab": 0,
                        "autoFilterDateGrouping": true,
                        "firstSheet": 0,
                        "minimized": false,
                        "showHorizontalScroll": true,
                        "showSheetTabs": true,
                        "showVerticalScroll": true,
                        "tabRatio": 600,
                        "visibility": "visible"
                    }
                ],
                "Sheets": [
                    {
                        "name": "Лист1",
                        "sheetId": "1",
                        "sheetid": "1",
                        "id": "rId1",
                        "Hidden": 0
                    }
                ],
                "CalcPr": {
                    "calcId": "162913",
                    "calcid": "162913",
                    "calcCompleted": "true",
                    "calcMode": "auto",
                    "calcOnSave": "true",
                    "concurrentCalc": "true",
                    "fullCalcOnLoad": "false",
                    "fullPrecision": "true",
                    "iterate": "false",
                    "iterateCount": "100",
                    "iterateDelta": "0.001",
                    "refMode": "A1"
                },
                "Names": [],
                "xmlns": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
                "Views": [
                    {}
                ]
            },
            "Props": {
                "LastAuthor": "Соболев Евгений Игоревич",
                "Author": "Соболев Евгений Игоревич",
                "CreatedDate": "2022-07-05T04:37:51.000Z",
                "ModifiedDate": "2022-07-07T04:00:07.000Z",
                "Application": "SheetJS",
                "AppVersion": "16.0300",
                "DocSecurity": "0",
                "HyperlinksChanged": false,
                "SharedDoc": false,
                "LinksUpToDate": false,
                "ScaleCrop": false,
                "Worksheets": 1,
                "SheetNames": [
                    "Лист1"
                ]
            },
            "Custprops": {},
            "Deps": {},
            "Sheets": {
                "Лист1": {
                    "!ref": "A1:S15",
                    "A1": {
                        "t": "s",
                        "v": "Наименование организации",
                        "r": "<t>Наименование организации</t>",
                        "h": "Наименование организации",
                        "w": "Наименование организации"
                    },
                    "B1": {
                        "t": "s",
                        "v": "Адрес сайта",
                        "r": "<t>Адрес сайта</t>",
                        "h": "Адрес сайта",
                        "w": "Адрес сайта"
                    },
                    "C1": {
                        "t": "s",
                        "v": "Информация об отвественном за  администрирование официального сайта",
                        "r": "<t>Информация об отвественном за  администрирование официального сайта</t>",
                        "h": "Информация об отвественном за  администрирование официального сайта",
                        "w": "Информация об отвественном за  администрирование официального сайта"
                    },
                    "H1": {
                        "t": "s",
                        "v": "Информация об отвественном за защиту информациии официального сайта",
                        "r": "<t>Информация об отвественном за защиту информациии официального сайта</t>",
                        "h": "Информация об отвественном за защиту информациии официального сайта",
                        "w": "Информация об отвественном за защиту информациии официального сайта"
                    },
                    "M1": {
                        "t": "s",
                        "v": "Располжение сайта ( ГИС \"ЕЗХП\"/ Частный хостинг/Собственные ресурсы/Ресурсы ЦОД ПСО)",
                        "r": "<t>Располжение сайта ( ГИС \"ЕЗХП\"/ Частный хостинг/Собственные ресурсы/Ресурсы ЦОД ПСО)</t>",
                        "h": "Располжение сайта ( ГИС &quot;ЕЗХП&quot;/ Частный хостинг/Собственные ресурсы/Ресурсы ЦОД ПСО)",
                        "w": "Располжение сайта ( ГИС \"ЕЗХП\"/ Частный хостинг/Собственные ресурсы/Ресурсы ЦОД ПСО)"
                    },
                    "N1": {
                        "t": "s",
                        "v": "Комментарий (Если сайт не в ГИС \"ЕЗХП\", причина)",
                        "r": "<t>Комментарий (Если сайт не в ГИС \"ЕЗХП\", причина)</t>",
                        "h": "Комментарий (Если сайт не в ГИС &quot;ЕЗХП&quot;, причина)",
                        "w": "Комментарий (Если сайт не в ГИС \"ЕЗХП\", причина)"
                    },
                    "O1": {
                        "t": "s",
                        "v": "Данные о соответствии хостинговой площадки требованиям по защите информации \n(для Частного хостинга, собственных ресурсов и ресурсов ЦОД ПСО)",
                        "r": "<t>Данные о соответствии хостинговой площадки требованиям по защите информации \r\n(для Частного хостинга, собственных ресурсов и ресурсов ЦОД ПСО)</t>",
                        "h": "Данные о соответствии хостинговой площадки требованиям по защите информации <br/>(для Частного хостинга, собственных ресурсов и ресурсов ЦОД ПСО)",
                        "w": "Данные о соответствии хостинговой площадки требованиям по защите информации \n(для Частного хостинга, собственных ресурсов и ресурсов ЦОД ПСО)"
                    },
                    "P1": {
                        "t": "s",
                        "v": "Сайт обрабатывает персональные данные (Да/Нет)",
                        "r": "<t>Сайт обрабатывает персональные данные (Да/Нет)</t>",
                        "h": "Сайт обрабатывает персональные данные (Да/Нет)",
                        "w": "Сайт обрабатывает персональные данные (Да/Нет)"
                    },
                    "Q1": {
                        "t": "s",
                        "v": "Сайт является ГИС/МИС (Да/Нет)",
                        "r": "<t>Сайт является ГИС/МИС (Да/Нет)</t>",
                        "h": "Сайт является ГИС/МИС (Да/Нет)",
                        "w": "Сайт является ГИС/МИС (Да/Нет)"
                    },
                    "R1": {
                        "t": "s",
                        "v": "Реквизиты НПА  закрепляющего  статус и правовое положение официального сайта",
                        "r": "<t>Реквизиты НПА  закрепляющего  статус и правовое положение официального сайта</t>",
                        "h": "Реквизиты НПА  закрепляющего  статус и правовое положение официального сайта",
                        "w": "Реквизиты НПА  закрепляющего  статус и правовое положение официального сайта"
                    },
                    "C2": {
                        "t": "s",
                        "v": "ФИО",
                        "r": "<t>ФИО</t>",
                        "h": "ФИО",
                        "w": "ФИО"
                    },
                    "D2": {
                        "t": "s",
                        "v": "Должность",
                        "r": "<t>Должность</t>",
                        "h": "Должность",
                        "w": "Должность"
                    },
                    "E2": {
                        "t": "s",
                        "v": "Телефон",
                        "r": "<t>Телефон</t>",
                        "h": "Телефон",
                        "w": "Телефон"
                    },
                    "F2": {
                        "t": "s",
                        "v": "Email",
                        "r": "<t>Email</t>",
                        "h": "Email",
                        "w": "Email"
                    },
                    "G2": {
                        "t": "s",
                        "v": "Реквизиты приказа о назначении",
                        "r": "<t>Реквизиты приказа о назначении</t>",
                        "h": "Реквизиты приказа о назначении",
                        "w": "Реквизиты приказа о назначении"
                    },
                    "H2": {
                        "t": "s",
                        "v": "ФИО",
                        "r": "<t>ФИО</t>",
                        "h": "ФИО",
                        "w": "ФИО"
                    },
                    "I2": {
                        "t": "s",
                        "v": "Должность",
                        "r": "<t>Должность</t>",
                        "h": "Должность",
                        "w": "Должность"
                    },
                    "J2": {
                        "t": "s",
                        "v": "Телефон",
                        "r": "<t>Телефон</t>",
                        "h": "Телефон",
                        "w": "Телефон"
                    },
                    "K2": {
                        "t": "s",
                        "v": "Email",
                        "r": "<t>Email</t>",
                        "h": "Email",
                        "w": "Email"
                    },
                    "L2": {
                        "t": "s",
                        "v": "Реквизиты приказа о назначении",
                        "r": "<t>Реквизиты приказа о назначении</t>",
                        "h": "Реквизиты приказа о назначении",
                        "w": "Реквизиты приказа о назначении"
                    },
                    "!margins": {
                        "left": 0.7,
                        "right": 0.7,
                        "top": 0.75,
                        "bottom": 0.75,
                        "header": 0.3,
                        "footer": 0.3
                    },
                    "!merges": [
                        {
                            "s": {
                                "c": 16,
                                "r": 0
                            },
                            "e": {
                                "c": 16,
                                "r": 1
                            }
                        },
                        {
                            "s": {
                                "c": 17,
                                "r": 0
                            },
                            "e": {
                                "c": 17,
                                "r": 1
                            }
                        },
                        {
                            "s": {
                                "c": 14,
                                "r": 0
                            },
                            "e": {
                                "c": 14,
                                "r": 1
                            }
                        },
                        {
                            "s": {
                                "c": 2,
                                "r": 0
                            },
                            "e": {
                                "c": 6,
                                "r": 0
                            }
                        },
                        {
                            "s": {
                                "c": 7,
                                "r": 0
                            },
                            "e": {
                                "c": 11,
                                "r": 0
                            }
                        },
                        {
                            "s": {
                                "c": 0,
                                "r": 0
                            },
                            "e": {
                                "c": 0,
                                "r": 1
                            }
                        },
                        {
                            "s": {
                                "c": 1,
                                "r": 0
                            },
                            "e": {
                                "c": 1,
                                "r": 1
                            }
                        },
                        {
                            "s": {
                                "c": 12,
                                "r": 0
                            },
                            "e": {
                                "c": 12,
                                "r": 1
                            }
                        },
                        {
                            "s": {
                                "c": 13,
                                "r": 0
                            },
                            "e": {
                                "c": 13,
                                "r": 1
                            }
                        },
                        {
                            "s": {
                                "c": 15,
                                "r": 0
                            },
                            "e": {
                                "c": 15,
                                "r": 1
                            }
                        }
                    ],
                    "A3": {
                        "v": 123,
                        "t": "n"
                    }
                }
            },
            "SheetNames": [
                "Лист1"
            ],
            "Strings": [
                {
                    "t": "Адрес сайта",
                    "r": "<t>Адрес сайта</t>",
                    "h": "Адрес сайта"
                },
                {
                    "t": "Наименование организации",
                    "r": "<t>Наименование организации</t>",
                    "h": "Наименование организации"
                },
                {
                    "t": "ФИО",
                    "r": "<t>ФИО</t>",
                    "h": "ФИО"
                },
                {
                    "t": "Должность",
                    "r": "<t>Должность</t>",
                    "h": "Должность"
                },
                {
                    "t": "Телефон",
                    "r": "<t>Телефон</t>",
                    "h": "Телефон"
                },
                {
                    "t": "Email",
                    "r": "<t>Email</t>",
                    "h": "Email"
                },
                {
                    "t": "Реквизиты приказа о назначении",
                    "r": "<t>Реквизиты приказа о назначении</t>",
                    "h": "Реквизиты приказа о назначении"
                },
                {
                    "t": "Сайт обрабатывает персональные данные (Да/Нет)",
                    "r": "<t>Сайт обрабатывает персональные данные (Да/Нет)</t>",
                    "h": "Сайт обрабатывает персональные данные (Да/Нет)"
                },
                {
                    "t": "Реквизиты НПА  закрепляющего  статус и правовое положение официального сайта",
                    "r": "<t>Реквизиты НПА  закрепляющего  статус и правовое положение официального сайта</t>",
                    "h": "Реквизиты НПА  закрепляющего  статус и правовое положение официального сайта"
                },
                {
                    "t": "Информация об отвественном за  администрирование официального сайта",
                    "r": "<t>Информация об отвественном за  администрирование официального сайта</t>",
                    "h": "Информация об отвественном за  администрирование официального сайта"
                },
                {
                    "t": "Информация об отвественном за защиту информациии официального сайта",
                    "r": "<t>Информация об отвественном за защиту информациии официального сайта</t>",
                    "h": "Информация об отвественном за защиту информациии официального сайта"
                },
                {
                    "t": "Располжение сайта ( ГИС \"ЕЗХП\"/ Частный хостинг/Собственные ресурсы/Ресурсы ЦОД ПСО)",
                    "r": "<t>Располжение сайта ( ГИС \"ЕЗХП\"/ Частный хостинг/Собственные ресурсы/Ресурсы ЦОД ПСО)</t>",
                    "h": "Располжение сайта ( ГИС &quot;ЕЗХП&quot;/ Частный хостинг/Собственные ресурсы/Ресурсы ЦОД ПСО)"
                },
                {
                    "t": "Комментарий (Если сайт не в ГИС \"ЕЗХП\", причина)",
                    "r": "<t>Комментарий (Если сайт не в ГИС \"ЕЗХП\", причина)</t>",
                    "h": "Комментарий (Если сайт не в ГИС &quot;ЕЗХП&quot;, причина)"
                },
                {
                    "t": "Сайт является ГИС/МИС (Да/Нет)",
                    "r": "<t>Сайт является ГИС/МИС (Да/Нет)</t>",
                    "h": "Сайт является ГИС/МИС (Да/Нет)"
                },
                {
                    "t": "Данные о соответствии хостинговой площадки требованиям по защите информации \n(для Частного хостинга, собственных ресурсов и ресурсов ЦОД ПСО)",
                    "r": "<t>Данные о соответствии хостинговой площадки требованиям по защите информации \r\n(для Частного хостинга, собственных ресурсов и ресурсов ЦОД ПСО)</t>",
                    "h": "Данные о соответствии хостинговой площадки требованиям по защите информации <br/>(для Частного хостинга, собственных ресурсов и ресурсов ЦОД ПСО)"
                },
                {
                    "t": ""
                }
            ],
            "Styles": {
                "Fonts": [
                    {
                        "sz": 11,
                        "color": {
                            "theme": 1
                        },
                        "name": "Calibri",
                        "family": 2,
                        "scheme": "minor"
                    },
                    {
                        "bold": 1,
                        "sz": 12,
                        "color": {
                            "theme": 1
                        },
                        "name": "Times New Roman",
                        "family": 1
                    }
                ],
                "Fills": [
                    {
                        "patternType": "none"
                    },
                    {
                        "patternType": "gray125"
                    }
                ],
                "Borders": [
                    {},
                    {}
                ],
                "CellXf": [
                    {
                        "numFmtId": 0,
                        "numfmtid": "0",
                        "fontId": 0,
                        "fontid": "0",
                        "fillId": 0,
                        "fillid": "0",
                        "borderId": 0,
                        "borderid": "0",
                        "xfId": 0,
                        "xfid": "0"
                    },
                    {
                        "numFmtId": 0,
                        "numfmtid": "0",
                        "fontId": 0,
                        "fontid": "0",
                        "fillId": 0,
                        "fillid": "0",
                        "borderId": 0,
                        "borderid": "0",
                        "xfId": 0,
                        "xfid": "0",
                        "applyAlignment": true,
                        "applyalignment": "1",
                        "alignment": {
                            "vertical": "center",
                            "horizontal": "center"
                        }
                    },
                    {
                        "numFmtId": 0,
                        "numfmtid": "0",
                        "fontId": 0,
                        "fontid": "0",
                        "fillId": 0,
                        "fillid": "0",
                        "borderId": 1,
                        "borderid": "1",
                        "xfId": 0,
                        "xfid": "0",
                        "applyBorder": true,
                        "applyborder": "1",
                        "applyAlignment": true,
                        "applyalignment": "1",
                        "alignment": {
                            "vertical": "center",
                            "horizontal": "center"
                        }
                    },
                    {
                        "numFmtId": 0,
                        "numfmtid": "0",
                        "fontId": 1,
                        "fontid": "1",
                        "fillId": 0,
                        "fillid": "0",
                        "borderId": 1,
                        "borderid": "1",
                        "xfId": 0,
                        "xfid": "0",
                        "applyFont": true,
                        "applyfont": "1",
                        "applyBorder": true,
                        "applyborder": "1",
                        "applyAlignment": true,
                        "applyalignment": "1",
                        "alignment": {
                            "vertical": "center",
                            "horizontal": "center",
                            "wrapText": true
                        }
                    },
                    {
                        "numFmtId": 0,
                        "numfmtid": "0",
                        "fontId": 1,
                        "fontid": "1",
                        "fillId": 0,
                        "fillid": "0",
                        "borderId": 1,
                        "borderid": "1",
                        "xfId": 0,
                        "xfid": "0",
                        "applyFont": true,
                        "applyfont": "1",
                        "applyBorder": true,
                        "applyborder": "1",
                        "applyAlignment": true,
                        "applyalignment": "1",
                        "alignment": {
                            "vertical": "center",
                            "horizontal": "center",
                            "wrapText": true
                        }
                    }
                ]
            },
            "Themes": {},
            "SSF": {
                "0": "General",
                "1": "0",
                "2": "0.00",
                "3": "#,##0",
                "4": "#,##0.00",
                "9": "0%",
                "10": "0.00%",
                "11": "0.00E+00",
                "12": "# ?/?",
                "13": "# ??/??",
                "14": "m/d/yy",
                "15": "d-mmm-yy",
                "16": "d-mmm",
                "17": "mmm-yy",
                "18": "h:mm AM/PM",
                "19": "h:mm:ss AM/PM",
                "20": "h:mm",
                "21": "h:mm:ss",
                "22": "m/d/yy h:mm",
                "37": "#,##0 ;(#,##0)",
                "38": "#,##0 ;[Red](#,##0)",
                "39": "#,##0.00;(#,##0.00)",
                "40": "#,##0.00;[Red](#,##0.00)",
                "45": "mm:ss",
                "46": "[h]:mm:ss",
                "47": "mmss.0",
                "48": "##0.0E+0",
                "49": "@",
                "56": "\"上午/下午 \"hh\"時\"mm\"分\"ss\"秒 \""
            }
        }
        const worksheet = workbook.Sheets.Лист1
        console.log('workbook до модификации', workbook)
        utils.sheet_add_aoa(worksheet, [[321]], {origin: 'A4'});
        // utils.book_append_sheet(workbook1, worksheet, "Test");
        console.log('workbook', workbook)
        // writeFileXLSX(workbook, 'newFile.xlsx', {bookType:"xlsx", type:"bas e64"})

        //
        // // const inputTest = document.querySelector("#input_dom_element");
        // console.log('sample', sample)
        //
        // const sheets = read('./files/sample.xlsx')
        // // const sheets = read(sample)
        //
        // console.log('sheets', sheets)
        /* utils.sheet_add_aoa позволяет изменить данные в определенной ячейке, принимает лист, массив с изменениями . ячейку в которой нужно произвести изменения*/
        // const editedSheets = utils.sheet_add_aoa(sheets, [[123]], { origin: 'A3' });

        // console.log('editedSheets', editedSheets)

        // writeFileXLSX(editedSheets, 'newFile.xlsx', {bookType:"xlsx", type:"base64"})

        function handleFile(e) {
            var file = e.target.files[0];
            console.log('var file = e.target.files[0];',file)

            var reader = new FileReader();
            reader.onload = function(e) {
                var data = e.target.result;
                /* reader.readAsArrayBuffer(file) -> data will be an ArrayBuffer */
                var workbook = read(e.target.result, { bookType:'xlsx', cellStyles:true, sheetStubs: true });
                // const worksheet = utils.
                // const sheetsTest = workbook.sheets
                // utils.sheet_add_aoa(workbook.Sheets.Лист1,[[123]], { origin: 'A3' } )
                // console.log('sheetsTest', sheetsTest)
                console.log('workbook', workbook)
                // writeFile(workbook, 'newFile.xlsx', {bookType:"xlsx", type:"base64"})
                /* DO SOMETHING WITH workbook HERE */
            };
            reader.readAsArrayBuffer(file);
            console.log('reader.readAsArrayBuffer(file)',file)
        }

        const handleAddUserData = () => {
            const sampleNetRes = NET_RES;
            // console.log('sampleNetRes', sampleNetRes)
            const sampleEskAdd = ESK_ADD;
            const sampleSed = SED;
            utils.sheet_add_aoa(sampleNetRes.Sheets.Лист1, [
                [],
                [],
                [/*A3*/, `${profileData.lastName} ${profileData.firstName} ${profileData.middleName}`],
                [/*A4*/, profileData.org ],
                [/*A5*/, profileData.dept ],
                [/*A6*/, profileData.position],
                [/*A7*/, profileData.room],
                [/*A8*/, profileData.phone],
            ]);
            utils.sheet_add_aoa(sampleEskAdd.Sheets["Заявка на создание УЗ польз AD"], [
                [],
                [],
                [],
                [
                    profileData.lastName, //A4
                    profileData.firstName, //B4
                    `${profileData.lastName} ${profileData.firstName} ${profileData.middleName}`,
                    profileData.room,
                    `84242${profileData.phone}`,
                    profileData.position,
                    profileData.dept,
                    profileData.org,
                    profileData.address || 'адрес' ,
                    profileData.city || 'город',
                    profileData.postcode || 'индекс'
                ],

            ]);
            utils.sheet_add_aoa(sampleSed.Sheets["Заявка на изменения в СЭД ЭОС"], [
                [], [],
                [/*A3*/, /*B3*/, profileData.org],
                [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
                [
                    /*A23*/,
                    /*B23*/,
                    `${profileData.lastName} ${profileData.firstName} ${profileData.middleName}`,
                    profileData.position,
                    profileData.sedAction || 'добавить',
                    `${profileData.org}, ${profileData.dept}`,
                    profileData.position,
                ]
            ]);

            writeFile(sampleNetRes, `01. Заявка на доступ к ресурсам сети ${profileData.lastName} ${profileData.firstName} ${profileData.middleName}.xlsx`, {
                bookType: "xlsx",
                type: "base64"
            })
            writeFile(sampleEskAdd, `02. Заявка на создание УЗ ${profileData.lastName} ${profileData.firstName} ${profileData.middleName}.xlsx`, {
                bookType: "xlsx",
                type: "base64"
            })
            writeFile(sampleSed, `03. Заявка на создание, изменение, удаление в СЭД ${profileData.lastName} ${profileData.firstName} ${profileData.middleName}.xlsx`, {
                bookType: "xlsx",
                type: "base64"
            })
        };

        const handleChangeUserData = () => {
            const sampleSed = SED;
            const sampleEskChange = ESK_CHANGE;

            utils.sheet_add_aoa(sampleSed.Sheets["Заявка на изменения в СЭД ЭОС"], [
                [], [],
                [/*A3*/, /*B3*/, profileData.org],
                [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [],
                [
                    /*A23*/,
                    /*B23*/,
                    `${profileData.lastName} ${profileData.firstName} ${profileData.middleName}`,
                    profileData.position,
                    profileData.sedAction || 'добавить',
                    `${profileData.org}, ${profileData.dept}`,
                    profileData.position,
                ]
            ]);
            utils.sheet_add_aoa(sampleEskChange.Sheets["Заявка на изменение УЗ польз AD"], [
                [],
                [],
                [],
                [],
                [
                    testDataObject.login || 'логин',
                    profileData.lastName, //A4
                    profileData.firstName, //B4
                    `${profileData.lastName} ${profileData.firstName} ${profileData.middleName}`,
                    profileData.room,
                    `84242${profileData.phone}`,
                    profileData.position,
                    profileData.dept,
                    profileData.org,
                    profileData.address || 'адрес' ,
                    profileData.city || 'город',
                    profileData.postcode || 'индекс'
                ],

            ]);

            writeFile(sampleSed, `03. Заявка на создание, изменение, удаление в СЭД ${profileData.lastName} ${profileData.firstName} ${profileData.middleName}.xlsx`, {
                bookType: "xlsx",
                type: "base64"
            })
            writeFile(sampleEskChange, `05. Заявка на изменение УЗ в ЕСК (AD) ${profileData.lastName} ${profileData.firstName} ${profileData.middleName}.xlsx`, {
                bookType: "xlsx",
                type: "base64"
            })
        };

     return (
        <div>
            <h3>Кнопки для выгрузки Excel файлов</h3>

            <Button onClick={handleAddUserData}>Создать</Button>
            <Button onClick={handleChangeUserData}>Изменить</Button>
        </div>
    );
};