#REBAC - Relationship Based Access Control

Relationship Based Access is an authorization model in which auhtroization is given to after
accessing relationships between the entities, mainly, user, resource confirming that
a relationship does exist between the user and the resource, and, that relationship is allowed to perform whatever
operation the user wants to perform in the resource policy.

-- Authorization is derived from the graph of relationship between entities.
-- does a path exist and does the terminal relationship grants the required permission?

Defining a relationship between 2 entititess is called a relationship tuple.

The policy engine then performs graph traversal lazily on demand following all the relationship tuple to it @ Query time.
Relationship tuple is synonymous with a fact.

When someone tries to access a resource, the policy engine searches for a path between the resource and
the accessor. If a specific reachable path, between the subject and the object through specific relationships that satisfty the permission being checked, then auth is given. The traversal is directional and permission-specific.

First we define the schema, where we define actors and resources.
While definn gthe schema for the resource, we can declare the relations on the
resource. The perimissions on that resource are defined as a logical operation based on the relation to that resource. 
1)We can contextualise relationships by accessing already existing relations on the resource.
2)We can also inherit the relations from one resource to another by declaring a relationship between them.


ReBac carries context, ie while the policy engine mapping out the relationships between the user and the resource,
1) It remembers the relationships when going deeper in a graph, and can use that relationship context to authorize.
2) In some sysyemts, you can pass temporary relations tuples which exist only fot that query, like for ths session
user x is admin.
