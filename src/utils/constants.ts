export const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/797df41b-1129-4496-beb3-6fc2f29c59d3/web/IN-en-20260112-TRIFECTA-perspective_004732f9-7464-4a7c-940b-4a51c4f0f73f_small.jpg";

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

export const NAME_REGEX = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjg3ZGIyNDQ0MmQ2MWZiZmJlNDc5NGU2YmQyYzQzZiIsIm5iZiI6MTc2ODYxMzMxOS44NCwic3ViIjoiNjk2YWU1YzdhZmJkY2VhNTIyNjg5MWZhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.HgZOfDPERgXBHiwLL6JeMos-OaTmQ-LOe4Gw8-7tIb8",
  },
};
