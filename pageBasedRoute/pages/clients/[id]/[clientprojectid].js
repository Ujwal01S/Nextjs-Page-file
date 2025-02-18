import { useRouter } from "next/router";

export default function SelectedClientPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project Page for Specific project for selected client</h1>
    </div>
  );
}
