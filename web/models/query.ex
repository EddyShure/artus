defmodule Artus.Query do
  @moduledoc "Model for BIAS queries"
  use Artus.Web, :model

  schema "queries" do
    field :uuid, :string
    field :request, :string
    field :created_at, :naive_datetime
    field :views, :integer

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:uuid, :request, :created_at, :views])
    |> validate_required([:uuid, :request, :created_at, :views])
  end
end
