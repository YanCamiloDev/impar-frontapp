import { Badge, PaginationComp } from "../../StyledComponents";

export default function Pagination() {
  return (
    <PaginationComp>
      <Badge href="/e"> {`<`} </Badge>
      <Badge href="/e"> {`1`} </Badge>
      <Badge active href="/e"> {`2`} </Badge>
      <span>...</span>
      <a href="/e"> {`>`} </a>
    </PaginationComp>
  )
}