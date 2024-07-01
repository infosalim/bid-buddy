import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createItemAction } from "@/app/bids/create/actions";

export default function CreatePage() {

  return (
    <main className="container mx-auto py-12 space-y-6">
      <h1 className="text-4xl font-bold">Post an Item to Sell</h1>

      <form className="flex flex-col border p-10 rounded-lg space-y-4 max-w-lg" action={createItemAction}>
        <Input
          required
          className="max-w-lg"
          name="name"
          placeholder="Name your item"
        />  <Input
          required
          className="max-w-lg"
          name="startingPrice"
          type="number"
          step="0.01"
          placeholder="What to start your auction at"
        />
        <Button className="self-end" type="submit">Post Item</Button>
      </form>

    </main>
  );
}
