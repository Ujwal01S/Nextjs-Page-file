import { useRouter } from "next/router";

export default function SecondProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push("/clients/apple/whatsup");
  }
  return (
    <div>
      <h1>This is client project page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
