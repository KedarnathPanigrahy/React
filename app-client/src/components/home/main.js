import React from "react";

function Main() {
  return (
    <main>
      <h2>How to Participate in the Program</h2>
      <p>
        An agent is the software that schedules and runs the checks on a server.
        The checks usually are monitoring the server and/or processes running on
        that server, however, there are exceptions. Note that agent is called
        client at the sensu layer. The agent is tied directly to the server on
        which it runs (machine in CAM and server in Edge/Morpheus).
      </p>
      <p>
        The software itself is self contained, and contains almost all
        dependencies to run not only itself, but also the checks. Again there
        are rare exceptions to this. Any external dependencies for checks are
        noted in their descriptions. The agent is installed via native packages.
        Therefore, (at least for linux), updates take place via the normal patch
        processes (e.g. yum update)
      </p>
      <p>
        The package does not contain any configurations. Instead, either as part
        of installation or afterward, the agent needs to be registered. The
        registration generates an identifier (UUID), secrets (SSL cert and
        passwords), and any other configuration needed.
      </p>
    </main>
  );
}

export default Main;
