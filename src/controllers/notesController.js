
/*export const getAllNotes = (req,res) => {
     res.status(200).send("you got 5 notes");
};*/

// we can write it like this but functions are easier to handle with async properties

export function getAllNotes (req,res) {
     res.status(200).json({message:"fetched messages successfully"});
};

export function createNotes (req,res) {
     res.status(200).json({message:"Created notes successfully"});
};

export function updateNotes (req,res) {
     res.status(200).json({message:"Updates notes successfully"});
};

export function deleteNotes (req,res) {
     res.status(200).json({message:"Delete notes successfully"});
};