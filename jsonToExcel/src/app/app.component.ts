import { Component } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 jsonData =[
  {
    "dt_solicitacao": "2023-04-05T13:43:29.806Z",
    "cd_status": true,
    "ds_mensagem": "Sucesso - Relatório de participantes credenciados foi concluído",
    "ds_relatorio": [{
      "dt_emissao_relatorio": "2023-04-05T13:43:29.806Z",
      "cd_evento": "SCA-05042023085932",
      "nm_evento": "ASSEMBLEIA TESTE 1",
      "dt_evento": "05/04/23",
      "nm_local": "MATRIZ",
      "qt_total_credenciais": [{
        "qt_total_cooperados": 7,
        "qt_total_socio": 0,
        "qt_total_familiar": 2,
        "qt_total_visitante": 7
      }],
      "ds_credenciais": [{
        "ds_cooperado": [{
          "in_votante": "N",
          "nm_cooperado": "ERIKA STEINMETZ VILELA",
          "cd_matricula_filial": "30063-309:UNIDADE AVANÇADA SANTO ANTONIO DO AMPARO",
          "tp_credencial": "COOPERADO",
          "dt_emissao_etiqueta": "05/04/2023 09:01:16"
        }, {
          "in_votante": "S",
          "nm_cooperado": "EMERSON FUKUMOTO VIEIRA",
          "cd_matricula_filial": "24205-L08:LOJA SÃO PEDRO DA UNIÃO",
          "tp_credencial": "REPRESENTANTE",
          "in_inserido_manualmente": "S",
          "nm_representante": "GUILHERME",
          "nr_cpf_cnpj_representante": "11546513639",
          "dt_emissao_etiqueta": "05/04/2023 10:56:36"
        }, {
          "in_votante": "N",
          "nm_cooperado": "CELSO HIDETO YAMANAKA E OUTRO",
          "cd_matricula_filial": "18624-L15:LOJA RIO PARANAÍBA",
          "tp_credencial": "COOPERADO",
          "dt_emissao_etiqueta": "05/04/2023 09:00:53"
        }, {
          "in_votante": "N",
          "nm_cooperado": "KAIK VILELA DOS SANTOS",
          "cd_matricula_filial": "26322-301:UNIDADE AVANÇADA CONCEIÇÃO APARECIDA",
          "tp_credencial": "COOPERADO",
          "dt_emissao_etiqueta": "05/04/2023 09:01:30"
        }, {
          "in_votante": "N",
          "nm_cooperado": "ALAMAR KASAN DUARTE",
          "cd_matricula_filial": "6299-L09:LOJA ALFENAS",
          "tp_credencial": "COOPERADO",
          "dt_emissao_etiqueta": "05/04/2023 09:00:12"
        }, {
          "in_votante": "N",
          "nm_cooperado": "SHIGUEKAZU KARASAWA",
          "cd_matricula_filial": "24173-L18:LOJA SERRA DO SALITRE",
          "tp_credencial": "COOPERADO",
          "dt_emissao_etiqueta": "05/04/2023 09:01:47"
        }, {
          "in_votante": "N",
          "nm_cooperado": "WALDEMAR RIYOITI KATO",
          "cd_matricula_filial": "23094-L20:LOJA ARAGUARI",
          "tp_credencial": "COOPERADO",
          "dt_emissao_etiqueta": "05/04/2023 09:02:00"
        }],
        "ds_socio": [],
        "ds_familiar": [{
          "nm_familiar": "LIA",
          "cd_matricula_filial": "24281-L07:LOJA NOVA RESENDE",
          "tp_credencial": "FAMILIAR",
          "dt_emissao_etiqueta": "05/04/2023 09:04:06"
        }, {
          "nm_familiar": "KARLA",
          "cd_matricula_filial": "21415-L03:LOJA MONTE SANTO DE MINAS",
          "tp_credencial": "FAMILIAR",
          "dt_emissao_etiqueta": "05/04/2023 09:03:46"
        }],
        "ds_visitante": [{
          "nm_visitante": "LUIS GUILHERME",
          "nm_mucipio": "GUAXUPÉ",
          "dt_emissao_etiqueta": "05/04/2023 09:02:53"
        }, {
          "nm_visitante": "GUILHERME",
          "nm_mucipio": "GUAXUPÉ",
          "dt_emissao_etiqueta": "05/04/2023 09:03:02"
        }, {
          "nm_visitante": "RUZZI",
          "nm_mucipio": "GUAXUPÉ",
          "dt_emissao_etiqueta": "05/04/2023 09:03:15"
        }, {
          "nm_visitante": "ABREU",
          "nm_mucipio": "JURUAIA",
          "dt_emissao_etiqueta": "05/04/2023 10:09:18"
        }, {
          "nm_visitante": "AMANDA",
          "nm_mucipio": "GUAXUPÉ",
          "dt_emissao_etiqueta": "05/04/2023 09:02:33"
        }, {
          "nm_visitante": "ABREU",
          "nm_mucipio": "JURUAIA",
          "dt_emissao_etiqueta": "05/04/2023 10:12:50"
        }, {
          "nm_visitante": "LUAN",
          "nm_mucipio": "GUARANÉSIA",
          "dt_emissao_etiqueta": "05/04/2023 10:13:13"
        }]
      }]
    }]
  }
 ]

 constructor(private filterSaver: FileSaverService){
  
 }

 excelExport(){
  const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const EXCEL_EXTENSION = '.xlsx';

  const worksheet = XLSX.utils.json_to_sheet(this.jsonData);

  const  workbook = {
    Sheets:{
'testingSheet': worksheet
    },
    SheetNames:['testingSheet']
  }
  const excelBufer = XLSX.write(workbook,{bookType:'xlsx', type:'array'});

  const blobData = new Blob([excelBufer], {type:EXCEL_TYPE});
  this.filterSaver.save(blobData,'demoFile')
 }
}
