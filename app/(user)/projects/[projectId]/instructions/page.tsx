import CopyButton from "@/components/CopyButton";

const page = ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) {
    return <div>Invalid Project ID</div>;
  }

  if (!process.env.WIDGET_URL) {
    return <div>WIDGET_URL is missing</div>;
  }
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start collecting Feedback</h1>
      <p className="text-muted-foreground text-lg">
        Embed the following code into your project
      </p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
        <code className="text-white">
          {`<my-widget project-id="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyButton text={`<my-widget project="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}/>
      </div>
    </div>
  );
};

export default page;
