interface Props{
  load: boolean
}
function Pre({load}: Props) {
  return <div id={load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;
