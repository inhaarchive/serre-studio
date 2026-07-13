# SERRE Studio CMS Master

이 폴더는 두 ZIP을 비교한 뒤, **전시 디자인·기존 작품 데이터**와 **관리자 CMS 기능**을 한 프로젝트로 합친 최종 작업본입니다.

## 이 폴더 하나만 사용하세요

GitHub에는 이 폴더의 내용만 올립니다. 이전의 `SERRE_Studio_CMS_Ready...`와 `SERRE_Studio_Decap_CMS_Final...`은 보관용으로 두고 섞어 올리지 않습니다.

## 현재 포함된 기능

- 따뜻한 아이보리·차콜·세이지·샴페인 골드 중심 전시 UI
- 모바일 전시 목록 2열 / PC 3열
- 전시 상세 작품 2열 갤러리
- 작품 클릭 확대, 좌우 버튼, 키보드, 모바일 스와이프
- 작품명·부제·해설 표시
- CMS에서 전시 / Visual Dictionary / Research Notes 등록
- 수정 / 삭제
- 상태: 공개 / 비공개·보관 / 초안
- 전시 순서 직접 지정
- 기존 전시 4개와 작품 이미지 포함
  - 12간지 수호동물
  - 물결 속 인어
  - 은빛가시 · Silver Garden
  - 문틈 너머 · Beyond the Door

## 중요한 폴더

- `src/content/` : CMS 게시글
- `src/assets/uploads/` : 앞으로 CMS에서 올릴 이미지
- `src/assets/exhibitions/` : 현재 복원된 전시 이미지
- `src/admin/` : 관리자 화면
- `_site/` : 빌드할 때 자동 생성되는 결과물이라 GitHub에 미리 올릴 필요 없음

## GitHub에 올릴 때

압축을 푼 뒤 `SERRE_Studio_CMS_Master` 폴더 **안쪽의 내용 전체**를 새 저장소 최상단에 올립니다. 최상단에서 아래 항목이 보여야 정상입니다.

```text
src/
eleventy.config.js
netlify.toml
package.json
package-lock.json
README-KO.md
```

## 배포 흐름

1. GitHub 새 저장소에 업로드
2. Netlify에서 해당 저장소 연결
3. `netlify.toml` 설정으로 자동 빌드
4. 관리자 인증 연결
5. `https://사이트주소/admin/`에서 게시글 관리

## 보관과 삭제

- 잠시 숨기려면 상태를 `비공개·보관`으로 변경합니다. 파일은 남고 사이트에서는 사라집니다.
- 작성 중이면 `초안`으로 둡니다.
- 완전히 없앨 때만 CMS의 삭제 기능을 사용합니다.
