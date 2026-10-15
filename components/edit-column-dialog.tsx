import {Dialog, DialogContent, DialogFooter, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {useState} from "react";


export default function EditColumnDialog() {

    const [open, setOpen] = useState<boolean>(false);

    return (
       <Dialog open={open} onOpenChange={setOpen}>
           <DialogTrigger>
               Rename
           </DialogTrigger>
           <DialogContent>
                   <p>Hi</p>
                   <DialogFooter>
                       <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                           Cancel
                       </Button>
                       <Button type="submit">Add Application</Button>
                   </DialogFooter>
           </DialogContent>
       </Dialog>
    )
}