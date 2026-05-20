
/*export const getAllNotes = (req,res) => {
     res.status(200).send("you got 5 notes");
};*/

// we can write it like this but functions are easier to handle with async properties
import Note from "../model/Note.js"

export async function getAllNotes(req, res) {
     try {
          const notes = await Note.find().sort({createdAt:-1}) //to get everysingle model and sort it for latest
          res.status(200).json(notes)
     } catch (error) {
          console.error("Error in getAllNotes: ", error)
          res.status(500).json({ message: "Internal server error" })
     }
};

export async function getNotesById(req, res) {
     try {
          const notes = await Note.findById(req.params.id)
          if(!notes) return res.status(404).json({message:"Id not found"})
          //to get everysingle model
          res.status(200).json(notes)
     } catch (error) {
          console.error("Error in getNotesById: ", error)
          res.status(500).json({ message: "Internal server error" })
     }
};

export async function createNotes(req, res) {
     try {
          const { title, content } = req.body
          const note = new Note({ title: title, content: content })

          const savedNote = await note.save()
          res.status(201).json(savedNote)
     } catch (error) {
          console.error("Error in createNotes:: ", error)
          res.status(500).json({ message: "Internal server error" })
     }
};

export async function updateNotes(req, res) {
     try {
          const {title,content} = req.body;
          const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{
               new:true,
          })

          if(!updatedNote) return res.status(404).json({message:"Id not found"})
          res.status(200).json({message:"Note updated successfully!"})
     } catch (error) {
          console.error("Errpr in Update notes: ",error)
          res.status(500).json({ message: "Internal server error" })
     }
};

/*its similar to update, thpugh a few changes is that, it doesnt expect a body so no params nor does it need a body for title and notes */
export async function deleteNotes(req, res) {
     try {
          const deletedNote = await Note.findByIdAndDelete(req.params.id)
          if(!deletedNote) return res.status(404).json({message:"Id not found"})
          res.status(200).json({message:"Note deleted successfully!"})
     } catch (error) {
           console.error("Error in Delete notes: ",error)
          res.status(500).json({ message: "Internal server error" })
     }
}