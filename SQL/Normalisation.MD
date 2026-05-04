# Normalisation
It is the process of transforming the data in our relational database in order to remove redundancy amd ensure data integrity.
Breaking down large complex table into smaller simpler related tables and defining clear relationships bw them using keys.

# 1st normal form
Every attribute is single-valued attribute.

# 2nd normal form
There should be no partial dependency. A non ket attribute shouldnt be dependent on the subset of the primary key.
A column which is not a part of the key, must depend on the entire key, not a part of it.
only for compisite keys. SHOULD DEPEND ON THE WHOLE KEY.

# 3rd normal form
Every non key attribute should depend on the primary key. No transistive dependency.
A non-prime attribute shouldnt depend on another non-prime attribute.
SHOULD DEPEND ON NOTHING BUT THE KEY.

## Boyce Codd 3rd normal form; 
Every attribute should depend on the primary key.

# 4th normal form
No multivalued dependency, only time allowed are when they're on the key.
for one to many; You shouldn't have two independent "lists" stored in the same table if they both relate back to the same primary key and have nothing to do with each other.

# 5th normal form
It must not be possible to descirbe the table as being the logical result of joining some other tables together.
