// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

using System.Diagnostics;

namespace Aspire.Hosting.ApplicationModel;

[DebuggerDisplay("{DebuggerToString(),nq}")]
public abstract class DistributedApplicationComponent(string name) : IDistributedApplicationComponent
{
    public string Name { get; } = name;
    public ComponentMetadataCollection Annotations { get; } = new ComponentMetadataCollection();

    private string DebuggerToString()
    {
        return $@"Type = {GetType().Name}, Name = ""{Name}""";
    }
}