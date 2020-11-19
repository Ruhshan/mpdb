from openpyxl import load_workbook

from elasticsearch import Elasticsearch
from elasticsearch import helpers


def read_cell(sheet, cell):
    val = sheet[cell].value
    if val is not None:
        return str(val).strip()
    else:
        return ""


def read_excel(path):
    wb = load_workbook(filename=path)
    ws = wb["Sheet1"]
    es = Elasticsearch()
    actions = []

    for r in range(2, ws.max_row):
        row = {}
        if ws["A{}".format(r)].value is not None:
            row["scientificName"] = read_cell(ws, "A{}".format(r))
            row["familyName"] = read_cell(ws, "B{}".format(r))
            row["localName"] = read_cell(ws, "C{}".format(r))
            row["utilizedPart"] = read_cell(ws, "D{}".format(r))
            row["ailment"] = read_cell(ws, "F{}".format(r))
            row["activeCompound"] = read_cell(ws, "G{}".format(r))
            row["pmid"] = read_cell(ws, "H{}".format(r))
            actions.append({
                "_index":"mpdb",
                "_id":r-1,
                "_source":row
            })

    helpers.bulk(es, actions=actions)


if __name__ == "__main__":
    read_excel("/Users/ruhshan/Desktop/mpdb_files/short.xlsx")