from typing import List

from fastapi import APIRouter

from backend.schema.guide import Guide

router = APIRouter()

@router.get("/guide", response_model=List[Guide])
async def get_guide():
    guides = [
        Guide(id=1,
              text="If the user is looking for a specific plant, can search directly with its scientific name",
              imageCaption="A caption for the above image.",
              imageUrl="https://i.postimg.cc/CL0B8Pcd/mpdb1.png"),
        Guide(id=2,
              text="The user can search using a plants local name (Preferred for local users)",
              imageCaption="A caption for the above image.",
              imageUrl="https://i.postimg.cc/T1231ScD/mpdb2.png"),
        Guide(id=3,
              text="The user can search using genus name to look up all plant entries of that specific genus",
              imageCaption="A caption for the above image.",
              imageUrl="https://i.postimg.cc/9fp30fgL/mpdb3.png"),
        Guide(id=4,
              text="The user can search using family name to look up all plant entries of that specific family",
              imageCaption="A caption for the above image.",
              imageUrl="https://i.postimg.cc/gJ1PFTTp/mpdb4.png"),
        Guide(id=5,
              text="The user can search using active compounds name to look up all plant entries containing that specific active compound",
              imageCaption="A caption for the above image.",
              imageUrl="https://i.postimg.cc/vT5CRHn7/mpdb5.png"),
        Guide(id=6,
              text="The user can search using a specific ailments name to look up all plant entries that are used to treat that specific ailment in folk medicine",
              imageCaption="A caption for the above image.",
              imageUrl="https://i.postimg.cc/dVgRCRp1/mpdb6.png"),
        Guide(id=7,
              text="The user can search using utilized parts name to look up all plant entries whose that specific part is used in folk medicine",
              imageCaption="A caption for the above image.",
              imageUrl="https://i.postimg.cc/yNq9x133/mpdb7.png"),
        Guide(id=8,
              text="The user is advised to refrain from using advanced search as MPDB 2.0 doesn’t support advanced search options using multiple key words along with AND/OR",
              imageCaption="A caption for the above image.",
              imageUrl="https://i.postimg.cc/1zcgzpZb/mpdb8.png"),

    ]
    return guides